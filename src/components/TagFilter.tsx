// components/TagFilter.tsx
// adds the tag property for filtering products
type TagFilterProps = {
    tags: string[]
    selectedTag: string | null
    onSelect: (tag: string | null) => void
  }
  
  export default function TagFilter({ tags, selectedTag, onSelect }: TagFilterProps) {
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onSelect(tag === selectedTag ? null : tag)}
            className={`px-3 py-1 rounded-full border ${
              tag === selectedTag
                ? 'bg-6B2F00 text-FCF7D9'
                : 'bg-brown-100 text-FCF7D9 hover:bg-brown-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    )
  }