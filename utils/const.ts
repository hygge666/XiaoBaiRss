// APP INFO
export const APP_NAME = 'XiaoBaiRss'
export const PROJECT_ID = 'fre123'
export const APP_ICON = 'https://img01.anheyu.com/useruploads/156/2023/12/28/658d00c71e6be.png'
export const APP_SLOGAN = 'Free Resource For Everyone'
export const DOMAIN = 'rss.lxyq.link'
export const WEB_HOST = 'https://rss.lxyq.link/'
export const GITHUB_URL = 'https://github.com/hygge666'
export const GZH_IMG = 'https://img01.anheyu.com/useruploads/156/2023/12/28/658cfc95014fe.jpeg'
export const TELEGRAM_URL = 'https://lead.lxyq.link/'
export const FEEDBACK_URL = 'https://www.hylove.top/essay/'

export const SEO_TITLE_SUFFIX = 'XiaoBaiRss 免费资源共享平台  '

export const HEADER_TEXT = {
	DEFAULT: APP_NAME,
	NEWS: 'XiaoBaiRss 热榜资讯',
}

// NEWS
export const NEWS_KEY_CATEGORY_HOT_NEWS = 'news'
export const NEWS_KEY_CATEGORY_TECH = 'tech'
export const NEWS_KEY_CATEGORY_WEEKLY = 'weekly'

export const NEWS_CATEGORY_LIST = [
	{
		name: '新闻热榜',
		url: '/news',
		letter: 'News',
		icon: 'https://img.fre123.com/i/2023/12/26/658ae9eb4042c.png',
	},
	{
		name: '技术热榜',
		url: '/tech',
		letter: 'Tech',
		icon: 'https://img.fre123.com/i/2023/12/26/658ae9fb91a20.png',
	},
	{
		name: '精选周刊',
		url: '/weekly',
		letter: 'Weekly',
		icon: 'https://img.fre123.com/i/2023/12/26/658aea08acb20.png',
	},
]

export const NEWS_DEFAULT_SUMMARY_CATEGORY_NEWS = '综合热榜'
export const NEWS_DEFAULT_SUMMARY_CATEGORY_TECH = '综合热榜'

// STATS
export const STATS_TYPE_CLICK = 'click'

//STORE
export const STORE_KEY_INIT_SOURCE = 'fre123.news.init_source'
export const STORE_KEY_CURR_SOURCE = 'fre123.news.curr_source'
export const STORE_KEY_GROUP_NEWS = 'fre123.news.group_news'
