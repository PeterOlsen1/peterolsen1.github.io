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


When programming a Rust backend, the emphasis on memory safety is extremely important for creating an iron-clad
system that never fails. Since this app deals with os level concepts, it is necessary to build it upon a backend
with no chance for failure. Additionally, the functional language components that Rust offers, such as match statements and
types such as `Option<>` or `Result<>` make the code much easier to both write and read.

### Procedures

This project was inspired by my operating systems course last semester, which inspired me through helping me understand the basics of process managemenet.
The main idea here was being able to spin up servers without needing to navigate through boundless directories, hiding their inner submissions
behind the wall of gradescope obscurity.


There was one preliminary step, however, that needed to be addressed before these concepts could come into play. Whenever the user
opens a directory, the app searches for the specified _config.yaml_ file to ensure that it is a correctly formatted submisson.
Upon confirmation, the file is read and a mapping is created from every submission number to an actual human readable student name.


Once this is complete, the app recursively searches two layers into each directory, looking for any file that contains "server."
Depending on the file extension, the discovered server file would be run with either a python or node runtime, since our class only
deals with servers in those two runtimes. As an added bonus, node modules are installed by default if necessary!

### Challenges

The main challenge that I faced within this process was obtaining a clear communication stream before the frontend and the backend.
Since I wanted to pipe terminal output into my application, I needed a mode of communication between the two, which Tauri provides
with their <a href="https://v2.tauri.app/develop/calling-frontend/#channels">channels api</a>. For a day or so I struggled with
a very peculiar issue: the output of the terminal that I piped only appeared on the frontend if there was an error. This issue puzzled
me for quite a long time, but eventually I recalled one important operating systems principle: python fie I/O is based on C `<stdlib>`
functions. What does this really mean? The C stdlib buffers output when writing to stdout, but stderr is *not* buffered, therefore
explaining my previous issue! Once I understood the error here, it was solved by nothing more than passing a simple flag, `-u` to
the arguments when running a python file. With the inclusion of this flag, stdout buffering was no more, and I could finally stop
ripping my hair out.

### Where next?

One goal I still have to complete with this project is to make it compatable with different operating systems. Currently,
it has only been build for macOS. I would like to establish some sort of CI/CD Github actions pipeline to build the project
for every operating system, and not just macOS. My forays into DevOps have been few and far between, but I hope to one day
dip my toes in with this small project.