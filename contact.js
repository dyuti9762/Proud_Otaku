const link = encodeURIComponent('https://www.nytimes.com/');

const urlMap = {
  'facebook': 'https://www.facebook.com/sharer/sharer.php?u=',
  'twitter': 'https://twitter.com/intent/tweet?url=',
  'google-plus': 'https://plus.google.com/share?url=',  
  'linkedin': 'https://www.linkedin.com/shareArticle?mini=true&url='
};

$('button').on('click', (event) => {
	const network = $(event.target).closest('.social-widget').data('network');
  const url = urlMap[network] + link;
	window.open(url,'share', 'menubar=no,toolbar=no,scrollbars=yes,resizable=yes,height=450,width=400');
});