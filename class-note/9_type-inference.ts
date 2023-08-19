interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
  desc: string;
  tag: K;
}

let detailedItem: DetailDropdown<string> = {
  value: 'test',
  title: 'test',
  desc: 'test',
  tag: '22'
}

