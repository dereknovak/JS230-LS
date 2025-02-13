posts = [];

let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
};

post1.tags = ['Food', 'Cooking', 'Vegetables'];

let post2 = {
  title: 'The second post of the series',
  published: 'February 12, 2025',
  body: 'Today is one day before my birthday!'
}

posts.push(post1, post2);

Handlebars.registerPartial('tag', document.getElementById('tag').innerHTML);
const template = Handlebars.compile(document.getElementById('post').innerHTML);
document.body.innerHTML += template({ posts: posts });
