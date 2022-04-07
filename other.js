newspapers.forEach(newspaper => {
    axios.get(newspaper.address).then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        // This is were we parce the html to find the a tag which contains the keeword we are looking for
        $('a:contains("Russia")', html).each(function () {
            const title = $(this).text(); // title of the article stored in place text
            const url = $(this).attr('href'); // link to the actual article
            //const source = newspaper.name

            articles.push(
                {
                    title,
                    url,
                    source: newspaper.name
                }
            );
        });
    });
});
