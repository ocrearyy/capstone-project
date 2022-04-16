fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPu1KWpwmlTnYdtWyYwl/comments?item_id=${id}')
.then((res) => {
    console.log('resolved!', res);
    return res.json();
})
.then((data) => {
    console.log(data)
})
.catch((e) => {
    console.log('error!', e)
});
