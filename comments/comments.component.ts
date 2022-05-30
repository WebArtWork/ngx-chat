import { Component, Input } from '@angular/core';

export interface channel {
	chat: string;
	thumb: string;
	name :string;
};

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent{
	@Input() chats;
	public selected:any;
  constructor() { }

}
