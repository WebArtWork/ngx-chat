## In termianl /your_project/client:
```
waw add ngx-chat
```
## Your_page.module.ts
import chat module to your page
```
import { ChatModule } from 'src/app/modules/chat/chat.module';
@NgModule({
	imports: [
		ChatModule
	],
```
## Your_page.component.ts
import chat service to your page
```
import { ChatService } from 'src/app/modules/chat/chat.service';
export class Your_pageComponent{
	constructor(public ch: ChatService ) {}
}
```
## Your_page.component.html
for use this module use tag ```<messenger></messenger> ```
```
<messenger [isComment]="true" [chats]="[{name: 'name', chat: 'qwe', thumb: ''}]"></messenger>  <!--for coment -->
<hr>
<messenger [chats]="[{name: 'name', chat: 'qwe', thumb: ''}]"></messenger>      <!--for chat -->
```

