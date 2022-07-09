import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { HttpService, SocketService } from 'wacom';
import { ChatService } from '../chat.service';
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
		private http: HttpService,
		private socket: SocketService,
		public ch: ChatService
	) {
		socket.on('chat_message', created => {
			if (created.chat === this.chat) {
				if (this.isComment) {
					this.chats.unshift(created);
				} else {
					this.chats.push(created);
				}
			}
		});
	}
	public text = '';
	send(){
		this.http.post('/api/chat/send', {
			chat: this.chat,
			text: this.text
		}, created => {
			this.socket.emit('chat_message', created);
			if (this.isComment) {
				this.chats.unshift(created);
			} else {
				this.chats.push(created);
			}
		});
		this.text = '';
	}
}
