export const fetchAIResponse = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return {
        message: data.fact || 'No fact found',
        codeBlocks: [],
        type: 'ai',
      };
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return {
        message: 'Error fetching AI response',
        codeBlocks: [],
        type: 'ai',
      };
    }
  };