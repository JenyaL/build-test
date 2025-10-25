import React, { useState } from "react";

export default function Input({ defaultValue = "", onChange }) {
    const [v, setV] = useState();
    return (
        <input
            value={v}
            defaultValue={defaultValue}
            onChange={(e) => {
                setV(e.target.value);
                if (onChange) onChange(e);
            }}
        />
    );
}