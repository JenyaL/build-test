import React, { useState } from "react";

export default function BadTooltip({ text = "Tooltip", children = "Hover me" }) {
    const [open, setOpen] = useState(false);
    return (
        <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-describedby="tooltip">{children}</button>
            {open && (
                <span id="tooltip" role="tooltip" style={{ border: "1px solid #333", padding: 4 }}>
          {text}
        </span>
            )}
    </span>
    );
}