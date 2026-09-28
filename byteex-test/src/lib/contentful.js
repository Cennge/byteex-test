import * as contentful from 'contentful';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = space && accessToken
  ? contentful.createClient({
      space: space,
      accessToken: accessToken,
    })
  : null;

export async function getBenefits() {
  if (!client) {
    console.warn('Contentful keys not found in .env, using fallback data.');
    return null;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'benefit',
      order: 'sys.createdAt'
    });
    
    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      desc: item.fields.description,
      icon: item.fields.iconName ? `/image/${item.fields.iconName}` : '/image/icon-bullet-1.svg',
    }));
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    return null;
  }
}
