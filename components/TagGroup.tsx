import TagAmount from "./TagAmount"
import TagName from "./TagName"

const TagGroup = () => {
  return (
    <div className="TagGroup flex gap-3 justify-center items-center w-fit p-2">
        <TagName>
            Success
            </TagName>
            <TagAmount amount={'133'}/>
    </div>
  )
}

export default TagGroup