const cards = [
  ['A', 'A', 'offsuited'],
  ['A', 'K', 'suited'],
  ['A', 'Q', 'suited'],
  ['A', 'J', 'suited'],
  ['A', 'T', 'suited'],
  ['A', '9', 'suited'],
  ['A', '8', 'suited'],
  ['A', '7', 'suited'],
  ['A', '6', 'suited'],
  ['A', '5', 'suited'],
  ['A', '4', 'suited'],
  ['A', '3', 'suited'],
  ['A', '2', 'suited'],
  ['K', 'A', 'offsuited'],
  ['K', 'K', 'offsuited'],
  ['K', 'Q', 'suited'],
  ['K', 'J', 'suited'],
  ['K', 'T', 'suited'],
  ['K', '9', 'suited'],
  ['K', '8', 'suited'],
  ['K', '7', 'suited'],
  ['K', '6', 'suited'],
  ['K', '5', 'suited'],
  ['K', '4', 'suited'],
  ['K', '3', 'suited'],
  ['K', '2', 'suited'],
  ['Q', 'A', 'offsuited'],
  ['Q', 'K', 'offsuited'],
  ['Q', 'Q', 'offsuited'],
  ['Q', 'J', 'suited'],
  ['Q', 'T', 'suited'],
  ['Q', '9', 'suited'],
  ['Q', '8', 'suited'],
  ['Q', '7', 'suited'],
  ['Q', '6', 'suited'],
  ['Q', '5', 'suited'],
  ['Q', '4', 'suited'],
  ['Q', '3', 'suited'],
  ['Q', '2', 'suited'],
  ['J', 'A', 'offsuited'],
  ['J', 'K', 'offsuited'],
  ['J', 'Q', 'offsuited'],
  ['J', 'J', 'offsuited'],
  ['J', 'T', 'suited'],
  ['J', '9', 'suited'],
  ['J', '8', 'suited'],
  ['J', '7', 'suited'],
  ['J', '6', 'suited'],
  ['J', '5', 'suited'],
  ['J', '4', 'suited'],
  ['J', '3', 'suited'],
  ['J', '2', 'suited'],
  ['T', 'A', 'offsuited'],
  ['T', 'K', 'offsuited'],
  ['T', 'Q', 'offsuited'],
  ['T', 'J', 'offsuited'],
  ['T', 'T', 'offsuited'],
  ['T', '9', 'suited'],
  ['T', '8', 'suited'],
  ['T', '7', 'suited'],
  ['T', '6', 'suited'],
  ['T', '5', 'suited'],
  ['T', '4', 'suited'],
  ['T', '3', 'suited'],
  ['T', '2', 'suited'],
  ['9', 'A', 'offsuited'],
  ['9', 'K', 'offsuited'],
  ['9', 'Q', 'offsuited'],
  ['9', 'J', 'offsuited'],
  ['9', 'T', 'offsuited'],
  ['9', '9', 'offsuited'],
  ['9', '8', 'suited'],
  ['9', '7', 'suited'],
  ['9', '6', 'suited'],
  ['9', '5', 'suited'],
  ['9', '4', 'suited'],
  ['9', '3', 'suited'],
  ['9', '2', 'suited'],
  ['8', 'A', 'offsuited'],
  ['8', 'K', 'offsuited'],
  ['8', 'Q', 'offsuited'],
  ['8', 'J', 'offsuited'],
  ['8', 'T', 'offsuited'],
  ['8', '9', 'offsuited'],
  ['8', '8', 'offsuited'],
  ['8', '7', 'suited'],
  ['8', '6', 'suited'],
  ['8', '5', 'suited'],
  ['8', '4', 'suited'],
  ['8', '3', 'suited'],
  ['8', '2', 'suited'],
  ['7', 'A', 'offsuited'],
  ['7', 'K', 'offsuited'],
  ['7', 'Q', 'offsuited'],
  ['7', 'J', 'offsuited'],
  ['7', 'T', 'offsuited'],
  ['7', '9', 'offsuited'],
  ['7', '8', 'offsuited'],
  ['7', '7', 'offsuited'],
  ['7', '6', 'suited'],
  ['7', '5', 'suited'],
  ['7', '4', 'suited'],
  ['7', '3', 'suited'],
  ['7', '2', 'suited'],
  ['6', 'A', 'offsuited'],
  ['6', 'K', 'offsuited'],
  ['6', 'Q', 'offsuited'],
  ['6', 'J', 'offsuited'],
  ['6', 'T', 'offsuited'],
  ['6', '9', 'offsuited'],
  ['6', '8', 'offsuited'],
  ['6', '7', 'offsuited'],
  ['6', '6', 'offsuited'],
  ['6', '5', 'suited'],
  ['6', '4', 'suited'],
  ['6', '3', 'suited'],
  ['6', '2', 'suited'],
  ['5', 'A', 'offsuited'],
  ['5', 'K', 'offsuited'],
  ['5', 'Q', 'offsuited'],
  ['5', 'J', 'offsuited'],
  ['5', 'T', 'offsuited'],
  ['5', '9', 'offsuited'],
  ['5', '8', 'offsuited'],
  ['5', '7', 'offsuited'],
  ['5', '6', 'offsuited'],
  ['5', '5', 'offsuited'],
  ['5', '4', 'suited'],
  ['5', '3', 'suited'],
  ['5', '2', 'suited'],
  ['4', 'A', 'offsuited'],
  ['4', 'K', 'offsuited'],
  ['4', 'Q', 'offsuited'],
  ['4', 'J', 'offsuited'],
  ['4', 'T', 'offsuited'],
  ['4', '9', 'offsuited'],
  ['4', '8', 'offsuited'],
  ['4', '7', 'offsuited'],
  ['4', '6', 'offsuited'],
  ['4', '5', 'offsuited'],
  ['4', '4', 'offsuited'],
  ['4', '3', 'suited'],
  ['4', '2', 'suited'],
  ['3', 'A', 'offsuited'],
  ['3', 'K', 'offsuited'],
  ['3', 'Q', 'offsuited'],
  ['3', 'J', 'offsuited'],
  ['3', 'T', 'offsuited'],
  ['3', '9', 'offsuited'],
  ['3', '8', 'offsuited'],
  ['3', '7', 'offsuited'],
  ['3', '6', 'offsuited'],
  ['3', '5', 'offsuited'],
  ['3', '4', 'offsuited'],
  ['3', '3', 'offsuited'],
  ['3', '2', 'suited'],
  ['2', 'A', 'offsuited'],
  ['2', 'K', 'offsuited'],
  ['2', 'Q', 'offsuited'],
  ['2', 'J', 'offsuited'],
  ['2', 'T', 'offsuited'],
  ['2', '9', 'offsuited'],
  ['2', '8', 'offsuited'],
  ['2', '7', 'offsuited'],
  ['2', '6', 'offsuited'],
  ['2', '5', 'offsuited'],
  ['2', '4', 'offsuited'],
  ['2', '3', 'offsuited'],
  ['2', '2', 'offsuited'],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className=" max-w-xl mx-auto sm:px-6 lg:px-8">
      <ul
        role="list"
        className="justify-items-center mb-5 grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
      >
        <li className="border border-gray-200 table text-9xl h-60 w-40 col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="table-cell align-middle">{cards[0][0]}</div>
        </li>
        <li className="border border-gray-200 table text-9xl  h-60 w-40 col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div
            className={classNames(
              cards[0][2] === 'offsuited' ? 'text-red-600' : '',
              'table-cell align-middle'
            )}
          >
            {cards[0][1]}
          </div>
        </li>
      </ul>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <button
          type="button"
          className="inline items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Fold
        </button>
        <button
          type="button"
          className="inline items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Call
        </button>
        <button
          type="button"
          className="inline items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Raise
        </button>
      </div>
    </div>
  )
}
