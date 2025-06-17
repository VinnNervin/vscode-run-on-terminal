### Language Support
- [Indonesia](#language-id)
- [English](#language-en)

### Language-ID

# Versi 1.1.0

## Fitur

Menjalankan file berkas dengan kompiler-nya di Terminal

## Pengaturan Ekstensi
Untuk menambahkan kompiler lain di settings.json:

Buka pengaturan (settings) atau `ctrl+,` cari `@ext:charles.run-on-terminal`

Sekarang Kamu bisa menambahkan kompiler dan ekstensi file tersebut  secara manual

`[item: ekstensi_file, value: kompiler]`

Tekan tombol `Add Item`

## Perintah

Secara default:

`Win(⊞)+Alt+r` di Windows Atau `Command(⌘)+Option(⌥)+r` di MacOS.

Kustom:

Kamu bisa mengubah pintasan keyboard di pengaturan `Ctrl+Shift+p` ketik `open keyboard shortcuts` cari `@command:runOnTerminal.runFile` lalu ubah pintasan keyboard sesuai keinginan mu.

## Persyaratan

Jika Kamu ingin menjalankan berkas, Kamu diwajibkan telah menginstal kompiler untuk berkas tersebut
* javascript (nodejs)
* python (python)
* lua (lua)

#### Peringatan  Error
Ini tidak akan berfungsi jika Kamu tidak menginstal kompiler di komputer mu. Meskipun Kamu telah menyertakannya dalam settings.json. Contohnya kamu tidak menginstal typescript
> _-poweshell-_<br>
> ts-node: The term 'ts-node' is not recognized as a name of a cmdlet, function, script file, or executable program.

Atau jika Kamu telah menginstalnya tetapi tidak memuat perintah di setting.json*
> No runner found for 'extension'

_*cara menambah ekstensi di settings.json ada diatas_

<br>
<br>
<br>


___
### Language-EN

# Version 1.1.0

## Features

Run files by it's compiler on Terminal

## Extension Settings 
To add another compiler:

Go to settings or `ctrl+,` search for `@ext:charles.run-on-terminal`


Now you can add the compiler and file extension manualy 

`[item: file_extension, value: compiler]`

## Command

By default:

`Win(⊞)+Alt+r` on Windows Or `Command(⌘)+Option(⌥)+r` on MacOS. 

Custom:

You can change the keybinding on settings `Ctrl+Shift+p` type `open keyboard shortcuts` search `@command:runOnTerminal.runFile` then change the keybinding.


## Requirements

If you want to run a file, you are required to have installed the compiler on your device for that file.

<ul>
   <li>javascript (nodejs) </li>
   <li>python (python)</li>
   <li>lua (lua)</li>
   <li>etc..</li>
</ul>

#### Warning Error 
this will not work if you don't install the compiler. Even if you have included it in settings.json. For example typescript
> -Powershell-<br>
> ts-node: The term 'ts-node' is not recognized as a name of a cmdlet, function, script file, or executable program.

Or if you have installed it but it does not load the command in setting.json
> No runner found for 'extension'

_*The way to add extensions in settings.json is above._








---