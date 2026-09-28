import * as contentful from 'contentful';

// Vite uses import.meta.env for environment variables
const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Only initialize if keys are present
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
    // Fetch entries of content type 'benefit'
    const response = await client.getEntries({
      content_type: 'benefit',
      order: 'sys.createdAt'
    });
    
    // Map CMS response to our component's expected format
    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      desc: item.fields.description,
      // Default to our hardcoded icons if the CMS doesn't provide an image, 
      // or map a specific string from the CMS to the image path
      icon: item.fields.iconName ? `/image/${item.fields.iconName}` : '/image/icon-bullet-1.svg',
    }));
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    return null;
  }
}
