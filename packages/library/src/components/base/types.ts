import { getUuid } from '../../utils';
export default [
  {
    id: getUuid(),
    label: 'Button 按钮',
    canvas: {
      type: 'comp',
      name: 'zo-button',
      props: {
        text: '文本',
        type: 'primary',
      },
      data: {},
    },
  },
  {
    id: getUuid(),
    label: 'Cell 单元格',
    canvas: {
      type: 'comp',
      name: 'zo-cell',
      props: {
        title: '左侧标题',
        value: '右侧内容',
        label: '标题下方描述信息',
      },
      events: {
        onClick: {
          funcString: 'function(e){this.props.value = Math.random()}',
        },
      },
    },
  },
  {
    id: getUuid(),
    label: 'CellGroup 单元格分组',
    canvas: {
      type: 'comp',
      name: 'zo-cell-group',
      props: {
        props: {
          title: '分组标题2',
          inset: true,
          border: true,
        },
      },
      data: {},
    },
  },
];
