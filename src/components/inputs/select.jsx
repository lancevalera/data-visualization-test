export const Select = ({ label, options, onChange, value }) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-medium">{label}</label>
    <select
      className="max-w-md bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      onChange={onChange}
      value={value}
    >
      <option value="">All</option>
      {
        options.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))
      }
    </select>
  </div>
)
