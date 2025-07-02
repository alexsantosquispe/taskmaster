import { ToggleButton } from '../ToggleButton/ToggleButton';

export const Sidebar = () => {
  return (
    <section className="flex w-80 flex-col rounded-2xl border border-gray-200 bg-gray-50 p-3">
      <div className="flex items-center justify-between py-2">
        <h1 className="text-lg">
          <strong>Task</strong>Manager
        </h1>
        <ToggleButton />
      </div>
      <nav>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </nav>
    </section>
  );
};
