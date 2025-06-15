### Problem Scope

In my time as a TA here at the U, I've spent a lot of time booting up servers and managing processes.
As a student, creating your first web server is quite the achivement, _rightfully so!_ But as a TA,
grading becomes infinitely more time consuming when servers start coming into question.

Speficially, mass assignment exports from gradescope dump submissions in the following pattern:

```
assignment_export/
├── config.yaml
├── submission_1/
├── submission_2/
├── ...
└── submission_n/
```

Upon first examination, this doesn't seem like it could be _that_ bad, but when you have to grade 20+ submissions
and each one is named **submission_x** it gets a little frustrating. It's like playing hide and go seek, but within an 
ungodly number of terminal tabs and directories. So, I did what any sane person would do. I decided to make my first 
desktop app!

### Technologies

The main decision here is my aversion to electron. **Why?** Electron packages both a node and chromium runtime within your
compiled app, which results in a default size of at least _~200mb_ (holy crap!). Not wanting to take up this much
space for a simple app, I decided to set my sights on some other desktop app creation tools. My search lead me to 
<a href="https://v2.tauri.app/">tauri.</a> Tauri combines all of my weird programming special interests into one,
allowing me to use both Rust and Svelte (or really any frontend framework). But the real advantage here is the size.
Tauri hooks into the native OS' webview, meaning that there's no need to package chromium and node, 
resulting in a "Hello World" app size of under _1mb_!

### Procedures

This project was inspired by my operating systems course last semester, helping me understand the basics of process management.
The main idea here was being able to spin up servers without needing to navigate through boundless directories, hiding their inner submissions
behind the wall of gradescope obscurity.

To solve this, I took the approach of recursively searching two layers into each directory, looking for any file that contains "server."
Depending on the file extension, the discovered server file would be run with either a python or node runtime, since our class only
deals with servers in those two runtimes. Since Rust allows for extremely safe systems level programming, the Rust backend
made this process relatively painless. 

### Challenges

