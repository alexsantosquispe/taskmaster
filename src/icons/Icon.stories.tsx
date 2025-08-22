import * as Icons from './index';

import type { Meta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Icons'
} as Meta;

export const IconGallery = () => {
  const [filter, setFilter] = useState('');

  const filteredIcons = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4">
      <div className="flex w-1/2 flex-col gap-y-1">
        <label>Icons Gallery</label>
        <input
          placeholder="Search icons..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border border-neutral-300 p-2"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {filteredIcons.map(([name, IconComponent]) => (
          <div
            key={name}
            className="flex h-[10rem] w-[10rem] flex-col items-center justify-center gap-4 rounded-lg border border-neutral-300"
          >
            <IconComponent className="size-6" />
            <pre className="text-primary text-xs font-medium">{name}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};
