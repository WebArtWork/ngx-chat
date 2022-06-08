import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { MessengerComponent } from './messenger/messenger.component';
import { WacomModule } from 'wacom';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		WacomModule
	],
	declarations: [
		MessengerComponent,
		ChatComponent,
		CommentsComponent
	],
	exports: [
		MessengerComponent,
		ChatComponent,
		CommentsComponent
	],
	providers: []

})
export class ChatModule { }
