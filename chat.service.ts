import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	combine(_ids: string[], join = '') {
		for (let i = 0; i < _ids.length; i++) {
			_ids[i] = _ids[i].toString().substring(0, 8);
			_ids[i] = new Date(parseInt(_ids[i], 16) * 1000).getTime().toString();
		}
		_ids.sort((a, b)=>{
			if(Number(a) > Number(b)) {
				return -1;
			} else {
				return 1;
			}
		});
		return _ids.join(join);
	}
	constructor() { }
}