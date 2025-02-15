import { ActionType, UseFetchActions } from '../TableTypes';
/**
 * 获取用户的 action 信息
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
export function useActionType(
  ref: React.MutableRefObject<ActionType | undefined>,
  action: UseFetchActions,
  props: {
    onCleanSelected: () => void;
  },
) {
  const userAction: ActionType = {
    reload: async (resetRowSelected?: boolean) => {
      // 如果为 true，清空选择状态
      if (resetRowSelected) {
        await props.onCleanSelected();
      }
      action?.reload();
    },
    /** 刷新并且重置 */
    reloadAndRest: async () => {
      props.onCleanSelected();
      await action.setPageInfo({
        current: 1,
      });
    },
  };
  // eslint-disable-next-line no-param-reassign
  ref.current = userAction;
}
