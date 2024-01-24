const app = require('./utils/app');
const articleRoutes = require('./routes/articles');

app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author', articleRoutes);

app.listen(30090, () => {
    console.log('@30090');
})