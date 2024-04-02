type Widget = {
  id: string
  name: string
};

const WIDGETS: Widget[] = [
  {
    id: 'widget-1',
    name: 'Widget 1',
  },
  {
    id: 'widget-2',
    name: 'Widget 1',
  },
];

export function getAllWidgets(): Widget[] {
  return WIDGETS;
}

export function getWidgetById(id: string): Widget | undefined {
  return WIDGETS.find(w => w.id === id);
}