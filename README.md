# Simple Todo App

A clean and minimal **Todo app** built with **Next.js**, featuring task creation, editing, deletion, completion, and smooth UX enhancements. Designed for a delightful user experience with responsive UI and dark mode support.

##  Live Demo

🔗 [Live Application on Vercel](https://simple-todo-llseqj41s-rawan-amrs-projects.vercel.app)

---

##  Features

- **Add**, **Edit**, **Delete**, and **Toggle** todos
- **Celebrate** when all todos are marked as completed
- **Progress tracking** with visual indicator
- **Dark mode** support with smooth theme transitions
- **Responsive design** that adapts to mobile and desktop
- Clean accessibility via **shadcn/ui** components

---

##  Tech Used

- **Next.js** (App Router + server actions)
- **TypeScript** for static typing
- **Tailwind CSS** for styling
- **shadcn/ui** for accessible UI components
- Optional: **Clerk** (auth integration)
- Deployed on **Vercel**

---

##  Description

This application lets users keep track of their tasks effortlessly. You can:

1. **Add** tasks via a form.
2. **Edit** task titles inline.
3. **Toggle** completion status of each task.
4. **Delete** tasks you no longer need.
5. Watch a cheerful **celebration animation** when all tasks are marked complete.
6. View your **progress** with an intuitive progress bar.

Dark mode and responsive layouts ensure a comfortable experience across all devices.

---

##  Deployment

This app is automatically deployed via **Vercel**. To deploy your own instance:

1. Push your project to **GitHub**.
2. Import the repository into **Vercel**.
3. (Optional) Add required environment variables in **Project Settings**:
   - If using **Clerk**:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
     CLERK_SECRET_KEY
     ```
4. Vercel will build and deploy the app using the following defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** handled by Next.js
5. Your live link will be available right after deployment!

---



MIT License — feel free to use, modify, and redistribute.

