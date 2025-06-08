# Student Server Manager

<div class="tools">
    <div class="tool tuari">
        <img src="https://cdn.svgporn.com/logos/tauri.svg">
        <div>
            Tauri
        </div>
    </div>
    <div class="tool rust">
        <img src="https://cdn.svgporn.com/logos/rust.svg">
        <div>
            Rust
        </div>
    </div>
    <div class="tool svelte">
        <img src="https://cdn.svgporn.com/logos/svelte-icon.svg">
        <div>
            Svelte
        </div>
    </div>
</div>

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
and each one is named **submission_x** it gets a little frustrating. It's like playing hide and go seek, but within an overwhelming number of terminal tabs and directories. 

<!-- So what's the solution? Spend way more time creating a solution to confront this problem on your behalf! -->