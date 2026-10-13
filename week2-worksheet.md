# Week 2 Lab Worksheet
Name: Emin Khanlarov
Program: Software Engineering
Level I aimed for today: Core

## Before you run the lie
What do you expect `live done` to print, and why?

I think it will print undefined. The API sends "completed" not "done", and "as Task" does not change the data.

## After you run the lie
lecture example, title: undefined
live title: delectus aut autem
live done: undefined
Why did TypeScript allow this?

Because "as Task" just tells TypeScript to trust me. TypeScript only checks the code, it does not check the real data when the program runs.

## typecheck
Paste the error from `src/honest.ts` before you comment the line out.

src/honest.ts(13,7): error TS2322: Type 'unknown' is not assignable to type '{ title: string; }'.

## Activity 1
What printed for todo 99999?

starting fetch...
status: 404

What printed for the dead address (the network error)?

Network error: TypeError: fetch failed

Which of those two did `fetch` throw for?

The dead address. For 404 fetch does not throw, we got a status code. The dead address went into catch.

## Activity 3 — Outside feed
Paste the form boundary output (saved / refused lines).

saved: {
  title: 'Design database schema',
  status: 'doing',
  projectId: 1,
  dueDate: '2026-10-20'
}
refused: String must contain at least 1 character(s)
refused: Invalid enum value. Expected 'open' | 'doing' | 'done', received 'finished'
refused: Expected number, received string
refused: Required

Paste the outside-feed output.

— outside feed —
starting fetch...
got data
imported: {
  ok: true,
  task: { title: 'delectus aut autem', status: 'open', projectId: 1 }
}
starting fetch...
status: 404
missing todo: null

In one sentence: why was the raw to-do refused by `createTask` even though it has a title?

Because it has no status and no projectId, it has completed instead, so it does not match the create-task schema.

## Exit question
Where is the boundary in this program, and what do you trust after the data has crossed it?

The boundary is where data comes from outside (the form payload and the fetch from jsonplaceholder), and it is checked with safeParse. After safeParse is successful I can trust the data has the right fields and types.
