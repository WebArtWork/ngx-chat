## In termianl /your_project/client:
```
waw add ngx-chat
```
## 1.1 If you need chat only on 1 page: Your_page.module.ts
import chat module to your page
```
import { ChatModule } from 'src/app/modules/chat/chat.module';
@NgModule({
	imports: [
		ChatModule
	],
```
## 1.2 If you need chat on 2 or more pages : client/src/app/core/core.module.ts:
```
exports: [ /* exports */
		ChatModule
	],
```
## Your_page.component.html
for use this module use tag ```<messenger></messenger> ``` or ```<comments></comments> ```
```
<comments [chats]="[{name: 'name', chat: 'qwe', thumb: ''}]"></comments>  <!--for coment -->
<hr>
<messenger [chats]="[{name: 'name', chat: 'qwe', thumb: ''}]"></messenger>
      <!--for chat -->
```
# Find waw-chat and  do it step by step
```
https://github.com/WebArtWork/waw-chat
```
