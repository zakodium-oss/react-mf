export interface MFProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  /**
   * Molecular formula to display
   */
  mf: string;
}

export function MF(props: MFProps): JSX.Element;
