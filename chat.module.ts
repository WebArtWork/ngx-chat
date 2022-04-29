import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ChatComponent } from './chat/chat.component';
import { MessengerComponent } from './messenger/messenger.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		MessengerComponent,
		ChatComponent
	],
	exports: [
		MessengerComponent,
		ChatComponent
	],
	providers: []

})
export class ChatModule { }
