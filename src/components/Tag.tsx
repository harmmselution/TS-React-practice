
interface ITag {
    tag: string;
    id: number;
    handleClick: () => void;
}
export const Tag: React.FC<ITag> = ({tag,handleClick,id}) => {
    return <li onClick={() => handleClick()}>{tag}</li>
}