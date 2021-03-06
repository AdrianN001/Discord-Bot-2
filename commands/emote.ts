import { Emoji } from 'discord.js';
import { ICommand } from 'wokcommands';
import DISCORDJS from 'discord.js';



export default
{
    category: "Complex Commands",
    name : "emote",
    description: "A megadott emotet rakja rรก az elลzล รผzenetre",

    callback: ({message, args}) => {

        let channel = message.channel // <-- your pre-filled channel variable

        function string_to_list(string: string): string[] {
             
            return string.split("");
        };
        
        let argumentumok: string[] = string_to_list(args.join(" "));

        function translate_emote(emote_1: string) {

            let emote_2: string = emote_1.toLocaleLowerCase();
            switch(emote_2)
            {
                
                case "a":
                    return "๐ฆ"
                case "b":
                    return "๐ง"
                case "c":
                    return "๐จ"
                case "d":
                    return "๐ฉ"
                case "e":
                    return "๐ช"
                case "f":
                    return "๐ซ"
                case "g":
                    return "๐ฌ"
                case "h":
                    return "๐ญ"
                case "i":
                    return "๐ฎ"
                case "j":
                    return "๐ฏ"
                case "k":
                    return "๐ฐ"
                case "l":
                    return "๐ฑ"
                case "m":
                    return "๐ฒ"
                case "n":
                    return "๐ณ"
                case "o":
                    return "๐ด"
                case "p":
                    return "๐ต"
                case "q":
                    return "๐ถ"
                case "r":
                    return "๐ท"
                case "s":
                    return "๐ธ"
                case "t":
                    return "๐น"
                case "u":
                    return "๐บ"
                case "v":
                    return "๐ป"
                case "w":
                    return "๐ผ"
                case "x":
                    return "๐ฝ"
                case "y":
                    return "๐พ"
                case "z":
                    return "๐ฟ"

                
                case "1":
                    return"1๏ธโฃ";
                case "2":
                    return"2๏ธโฃ";
                case "3":
                    return"3๏ธโฃ";
                case "4":
                    return"4๏ธโฃ";
                case "5":
                    return"5๏ธโฃ";
                case "6":
                    return"6๏ธโฃ";
                case "7":
                    return"7๏ธโฃ";
                case "8":
                    return"8๏ธโฃ";
                case "9":
                    return"9๏ธโฃ";
                case "0":
                    return"0๏ธโฃ";

                case "#":
                    return "#๏ธโฃ"; 
                case "!":
                    return "โ๏ธ";
                case "?":
                    return "โ";
                
                
                default:
                    return '๐ค';
            }

        }

        let normalis:any[] = [];

        let emote = [];

        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        const other_alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        const szamok = ["0","1","2","3","4","5","6","7","8","9"];
        const osszes = alphabet.concat(other_alphabet).concat(szamok).concat([":",'<',">","?","!","#"]);

        for(let i = 0; i < argumentumok.length; i++)
        {
            if(argumentumok[i] == "<")
            {
                normalis.push(argumentumok.slice(i , argumentumok.indexOf(">") + 1).join(""));
                argumentumok.splice(i , argumentumok.indexOf(">") + 1)
                
                
            }else if ((osszes.includes(argumentumok[i]))) // nem betu es nem is egy custom emotet
            {
                normalis.push(translate_emote(argumentumok[i]));
            }

        }
        console.log(normalis)
        console.log(args)
        
        channel.messages.fetch({ limit: 2 }).then(messages => {

            
            let lastMessage = messages.last();

            

            for (const emoji of normalis)
            {
                
                if (!emoji.startsWith(":")){
                    
                    const getEmoji = DISCORDJS.Util.parseEmoji(emoji);
                    
        
                    
                    
                    lastMessage?.react(getEmoji?.id ?? emoji);
                   
                }else
                {
                    lastMessage?.react(emoji);
                }
    
            }
            messages.first()?.delete();
            
        });
        
        
    }
} as ICommand;