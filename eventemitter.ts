interface events {
	[propName:string]:Function[]
}

class EventEmitter {
	events :events
	constructor(){
		this.events = Object.create(null)
	}
	$on(event:string,callback:Function):void {
		if(this.events[event]){
			this.events[event].push(callback)
		}else {
			this.events[event] = [callback]
		}
	}
	$emit(event:string,args?:any[]) {
		this.events[event].forEach((callback:Function)=>{
			callback.call(this,args)
		})
	}
}

let e = new EventEmitter()

e.$on('test',()=>{
	console.log('a')
})
e.$emit('test')
