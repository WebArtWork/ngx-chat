import { Component, OnInit, Input } from '@angular/core';

export interface channel {
	chat: string;
	thumb: string;
	name :string;
};

@Component({
	selector: 'messenger',
	templateUrl: './messenger.component.html',
	styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
	@Input() chats;
	public selected:any;
	constructor() {}
	ngOnInit(): void {}
}
