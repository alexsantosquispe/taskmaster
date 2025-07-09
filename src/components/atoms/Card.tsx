import { CalendarIcon } from '../../icons';

const Card = () => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-neutral-200 bg-white text-sm">
      <div className="flex flex-col gap-2 px-2 pt-3">
        <span className="text-base font-medium">
          Research landing page trends.
        </span>
        <p className="text-neutral-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem
          rem quia exercitationem vitae doloremque voluptate optio quos fugit.
        </p>
      </div>

      <div className="flex w-full items-center justify-between px-2 text-xs text-neutral-600">
        <div className="flex items-center gap-2 py-4">
          <CalendarIcon className="size-4" />
          <span>12 Nov</span>
        </div>

        <div className="flex items-center gap-1 rounded px-1.5 py-0.5 text-neutral-400 shadow">
          <div className="h-3 w-3 rounded-full border-[1.5px] border-neutral-200" />
          <span>0%</span>
        </div>
      </div>

      <hr className="text-neutral-200" />

      <div className="px-2 py-3">Details</div>
    </div>
  );
};

export default Card;
