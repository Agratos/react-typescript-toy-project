import React, { useState } from "react";

const data = [
  {
    id: 1,
    label: "Item 1",
    isChecked: false,
    children: [
      {
        id: 2,
        label: "Item 1.1",
        isChecked: false,
      },
      {
        id: 3,
        label: "Item 1.2",
        isChecked: false,
      },
    ],
  },
  {
    id: 4,
    label: "Item 2",
    isChecked: false,
    children: [
      {
        id: 5,
        label: "Item 2.1",
        isChecked: false,
        children: [
          {
            id: 6,
            label: "Item 2.1.1",
            isChecked: false,
          },
          {
            id: 7,
            label: "Item 2.1.2",
            isChecked: false,
          },
        ],
      },
      {
        id: 8,
        label: "Item 2.2",
        isChecked: false,
      },
    ],
  },
];
const App = () => {
  const [items, setItems] = useState(data);

  const handleItemChange = (itemId: any, checked: any) => {
    const updatedItems = items.map((item: any) => {
      if (item.id === itemId) {
        item.isChecked = checked;
        if (item.children) {
          item.children = item.children.map((child: any) => ({
            ...child,
            isChecked: checked,
          }));
        }
      } else if (item.children) {
        item.children = item.children.map((child: any) => {
          if (child.id === itemId) {
            child.isChecked = checked;
          }
          return child;
        });
        const allChildrenChecked = item.children.every((child: any) => child.isChecked);
        if (allChildrenChecked) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
        }
      }
      return item;
    });
    setItems(updatedItems);
  };

  const renderItems = (items: any) => {
    return (
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={(e) => handleItemChange(item.id, e.target.checked)}
              />
              {item.label}
            </label>
            {item.children && renderItems(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderItems(items)}</div>;
};

export default App;