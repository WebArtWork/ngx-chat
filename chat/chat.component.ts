import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { HttpService } from 'wacom';
@Component({
	selector: 'chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
	@Input() isComment = false;
	@Input() chat:any = '';
	public chats = [];
	ngOnInit() {
		/*
		if(Array.isArray(this.chat)){
			let chat = '';
			this.chat
		}
		*/
		this.http.post('/api/chat/get', {
			chat: this.chat
		}, chats=>{
			if (this.isComment) {
				this.chats = chats;
			} else {
				this.chats = chats.reverse();
			}
		});
	}
	public ids2id(...args:any[]) {
		args.sort( (a, b) => {
			if (Number(a.toString().substring(0, 8)) > Number(b.toString().substring(0, 8))){
				return 1;
			}
			return -1;
		});
		return args.join();
	}
	constructor(
		public us: UserService,
		private http: HttpService
	) {}
	public text = '';
	send(){
		this.http.post('/api/chat/send', {
			chat: this.chat,
			text: this.text
		}, created => {
			if (this.isComment) {
				this.chats.unshift(created);
			} else {
				this.chats.push(created);
			}
		});
		this.text = '';
	}
}
