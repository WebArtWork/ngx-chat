import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ChatComponent } from './chat.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		ChatComponent
	],
	exports: [
		ChatComponent
	],
	providers: []

})

export class ChatModule { }
