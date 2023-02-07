# ts-searchbox-snippet

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-qsmnuw)

```js

// A helper type with the results we expect
// from calling the back end
type Result = {
title: string;
url: string;
abstract: string;
};
/\*\*

- The search function takes a query it sends
- to the back end, as well as a couple of tags
- as a string array, to get filtered results
  \*/
  function search(query: string, tags?: string[]): Promise<Result[]> {
  // Based on our input parameters, we build a query
  // string
  let queryString = `?query=${query}`;

// tags can be undefined as it's optional.
// let's check if they exist
if (tags && tags.length) {
// and add all tags in that array to the
// query string
queryString += `&tags=${tags.join()}`;
}

// Ready? Fetch from our search API
return (
fetch(`/search${queryString}`)
// When we get a response, we call the
// .json method to get the actual results
.then((response) => response.json())
);
}

type searchFn = typeof search;

const query: Query = {
query: 'Ember',
tags: ['javascript'],
assemble(includeTags = false) {
let query = `?query=${this.query}`;
if (includeTags && typeof this.tags !== 'undefined') {
query += `&${this.tags.join(',')}`;
}
return query;
},
};

type AssembleFn = (includeTags: boolean) => string;
type Query = {
query: string;
tags?: string[];
assemble: AssembleFn;
};
