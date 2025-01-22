import * as simpleIcons from 'simple-icons';

export default function IconComponent ({ name, width, height, onSlugChange = null }) {
    const iconKey = `si${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;
    if (simpleIcons[iconKey]) {
      if (onSlugChange) {
        setTimeout(() => onSlugChange(simpleIcons[iconKey].title), 0);
      }
      return (
        <div
          dangerouslySetInnerHTML={{ __html: simpleIcons[iconKey].svg }}
          style={{ 
            width: `${width}px`, 
            height: `${height}px`, 
            fill: `#${simpleIcons[iconKey].hex}`
        }}
        />
      );
    }
};