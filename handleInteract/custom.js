const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const elementPagination = $('.pagination ul')
const tableElement = $('.tb')
const searchElement = $('.input input')
const selectRowPerPageElement = $('.row-per-page')
const paginationContainer = $('.pagination')
const inforShowItemOfPage = $('.text-current-show')

let valueSearch = ''
let rowPerPageValue = 10
let currentPage = 1
let paginationButtons = null

const dataSet = [
    [
        'Tiger Nixon',
        'System Architect',
        'Edinburgh',
        '5421',
        '2011/04/25',
        '$320,800',
    ],
    [
        'Garrett Winters',
        'Accountant',
        'Tokyo',
        '8422',
        '2011/07/25',
        '$170,750',
    ],
    [
        'Ashton Cox',
        'Junior Technical Author',
        'San Francisco',
        '1562',
        '2009/01/12',
        '$86,000',
    ],
    [
        'Cedric Kelly',
        'Senior Javascript Developer',
        'Edinburgh',
        '6224',
        '2012/03/29',
        '$433,060',
    ],
    ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    [
        'Brielle Williamson',
        'Integration Specialist',
        'New York',
        '4804',
        '2012/12/02',
        '$372,000',
    ],
    [
        'Herrod Chandler',
        'Sales Assistant',
        'San Francisco',
        '9608',
        '2012/08/06',
        '$137,500',
    ],
    [
        'Rhona Davidson',
        'Integration Specialist',
        'Tokyo',
        '6200',
        '2010/10/14',
        '$327,900',
    ],
    [
        'Colleen Hurst',
        'Javascript Developer',
        'San Francisco',
        '2360',
        '2009/09/15',
        '$205,500',
    ],
    [
        'Sonya Frost',
        'Software Engineer',
        'Edinburgh',
        '1667',
        '2008/12/13',
        '$103,600',
    ],
    [
        'Jena Gaines',
        'Office Manager',
        'London',
        '3814',
        '2008/12/19',
        '$90,560',
    ],
    [
        'Quinn Flynn',
        'Support Lead',
        'Edinburgh',
        '9497',
        '2013/03/03',
        '$342,000',
    ],
    [
        'Charde Marshall',
        'Regional Director',
        'San Francisco',
        '6741',
        '2008/10/16',
        '$470,600',
    ],
    [
        'Haley Kennedy',
        'Senior Marketing Designer',
        'London',
        '3597',
        '2012/12/18',
        '$313,500',
    ],
    [
        'Tatyana Fitzpatrick',
        'Regional Director',
        'London',
        '1965',
        '2010/03/17',
        '$385,750',
    ],
    [
        'Michael Silva',
        'Marketing Designer',
        'London',
        '1581',
        '2012/11/27',
        '$198,500',
    ],
    [
        'Paul Byrd',
        'Chief Financial Officer (CFO)',
        'New York',
        '3059',
        '2010/06/09',
        '$725,000',
    ],
    [
        'Gloria Little',
        'Systems Administrator',
        'New York',
        '1721',
        '2009/04/10',
        '$237,500',
    ],
    [
        'Bradley Greer',
        'Software Engineer',
        'London',
        '2558',
        '2012/10/13',
        '$132,000',
    ],
    [
        'Dai Rios',
        'Personnel Lead',
        'Edinburgh',
        '2290',
        '2012/09/26',
        '$217,500',
    ],
    [
        'Jenette Caldwell',
        'Development Lead',
        'New York',
        '1937',
        '2011/09/03',
        '$345,000',
    ],
    [
        'Yuri Berry',
        'Chief Marketing Officer (CMO)',
        'New York',
        '6154',
        '2009/06/25',
        '$675,000',
    ],
    [
        'Caesar Vance',
        'Pre-Sales Support',
        'New York',
        '8330',
        '2011/12/12',
        '$106,450',
    ],
    [
        'Doris Wilder',
        'Sales Assistant',
        'Sydney',
        '3023',
        '2010/09/20',
        '$85,600',
    ],
    [
        'Angelica Ramos',
        'Chief Executive Officer (CEO)',
        'London',
        '5797',
        '2009/10/09',
        '$1,200,000',
    ],
    ['Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575'],
    [
        'Jennifer Chang',
        'Regional Director',
        'Singapore',
        '9239',
        '2010/11/14',
        '$357,650',
    ],
    [
        'Brenden Wagner',
        'Software Engineer',
        'San Francisco',
        '1314',
        '2011/06/07',
        '$206,850',
    ],
    [
        'Fiona Green',
        'Chief Operating Officer (COO)',
        'San Francisco',
        '2947',
        '2010/03/11',
        '$850,000',
    ],
    [
        'Shou Itou',
        'Regional Marketing',
        'Tokyo',
        '8899',
        '2011/08/14',
        '$163,000',
    ],
    [
        'Michelle House',
        'Integration Specialist',
        'Sydney',
        '2769',
        '2011/06/02',
        '$95,400',
    ],
    ['Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500'],
    [
        'Prescott Bartlett',
        'Technical Author',
        'London',
        '3606',
        '2011/05/07',
        '$145,000',
    ],
    [
        'Gavin Cortez',
        'Team Leader',
        'San Francisco',
        '2860',
        '2008/10/26',
        '$235,500',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
    [
        'Martena Mccray',
        'Post-Sales support',
        'Edinburgh',
        '8240',
        '2011/03/09',
        '$324,050',
    ],
    [
        'Unity Butler',
        'Marketing Designer',
        'San Francisco',
        '5384',
        '2009/12/09',
        '$85,675',
    ],
]

let datasetRefactor = dataSet.map((item) => {
    item.pop()
    return item
})

let datasetFilterdByRowPerPageValue = datasetRefactor.slice(0, 10)

console.log('length dataset', datasetRefactor.length)
console.log(inforShowItemOfPage)

// render data table

const renderRowTable = (data) => {
    const rowHeadTable = `
    <tr>
        <th id="sort-btn" onclick="handleSortRowTableByColumn('name')" class="name">Name <i class="fas fa-sort"></i></th>
        <th id="sort-btn" onclick="handleSortRowTableByColumn('position')" class="position">Position <i class="fas fa-sort"></i></th>
        <th id="sort-btn" onclick="handleSortRowTableByColumn('office')" class="office">Office <i class="fas fa-sort"></i></th>
        <th id="sort-btn" onclick="handleSortRowTableByColumn('extn')" class="extn">Extn. <i class="fas fa-sort"></i></th>
        <th id="sort-btn" onclick="handleSortRowTableByColumn('startDate')" class="startDate">Start date <i class="fas fa-sort"></i></th>
    </tr>`
    const rowsBody = data
        .map((row) => {
            return `
                <tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                    <td>${row[3]}</td>
                    <td>${row[4]}</td>
                </tr>
        `
        })
        .join('')
    const rowBottom = `
                <tr>
                    <td>Name</td>
                    <td>Position</td>
                    <td>Office</td>
                    <td>Age</td>
                    <td>Start date</td>
                </tr>`
    tableElement.innerHTML = rowHeadTable + rowsBody + rowBottom
}

const pageNumbers = (total, max, current) => {
    const half = Math.floor(max / 2)
    let to = max

    if (current + half >= total) {
        to = total
    } else if (current > half) {
        to = current + half
    }

    let from = Math.max(to - max, 0)

    return Array.from({ length: Math.min(total, max) }, (_, i) => i + 1 + from)
}

function PaginationButton(totalPages, maxPagesVisible = 10, currentPage = 1) {
    let pages = pageNumbers(totalPages, maxPagesVisible, currentPage)
    let currentPageBtn = null
    const buttons = new Map()
    const disabled = {
        start: () => pages[0] === 1,
        prev: () => currentPage === 1 || currentPage > totalPages,
        end: () => pages.slice(-1)[0] === totalPages,
        next: () => currentPage >= totalPages,
    }
    const frag = document.createDocumentFragment()
    const paginationButtonContainer = document.createElement('div')
    paginationButtonContainer.className = 'pagination-buttons'

    const createAndSetupButton = (
        label = '',
        cls = '',
        disabled = false,
        handleClick
    ) => {
        const buttonElement = document.createElement('button')
        buttonElement.textContent = label
        buttonElement.className = `page-btn ${cls}`
        buttonElement.disabled = disabled
        buttonElement.addEventListener('click', (e) => {
            handleClick(e)
            this.update()
            paginationButtonContainer.value = currentPage
            paginationButtonContainer.dispatchEvent(
                new CustomEvent('change', { detail: { currentPageBtn } })
            )
        })

        return buttonElement
    }

    const onPageButtonClick = (e) =>
        (currentPage = Number(e.currentTarget.textContent))

    const onPageButtonUpdate = (index) => (btn) => {
        btn.textContent = pages[index]

        if (pages[index] === currentPage) {
            currentPageBtn.classList.remove('active')
            btn.classList.add('active')
            currentPageBtn = btn
            currentPageBtn.focus()
        }
    }

    buttons.set(
        createAndSetupButton(
            'start',
            'start-page',
            disabled.start(),
            () => (currentPage = 1)
        ),
        (btn) => (btn.disabled = disabled.start())
    )

    buttons.set(
        createAndSetupButton(
            'prev',
            'prev-page',
            disabled.prev(),
            () => (currentPage -= 1)
        ),
        (btn) => (btn.disabled = disabled.prev())
    )

    pages.map((pageNumber, index) => {
        const isCurrentPage = currentPage === pageNumber
        const button = createAndSetupButton(
            pageNumber,
            isCurrentPage ? 'active' : '',
            false,
            onPageButtonClick
        )

        if (isCurrentPage) {
            currentPageBtn = button
        }

        buttons.set(button, onPageButtonUpdate(index))
    })

    buttons.set(
        createAndSetupButton(
            'next',
            'next-page',
            disabled.next(),
            () => (currentPage += 1)
        ),
        (btn) => (btn.disabled = disabled.next())
    )

    buttons.set(
        createAndSetupButton(
            'end',
            'end-page',
            disabled.end(),
            () => (currentPage = totalPages)
        ),
        (btn) => (btn.disabled = disabled.end())
    )

    buttons.forEach((_, btn) => frag.appendChild(btn))
    paginationButtonContainer.appendChild(frag)

    this.render = (container = paginationContainer) => {
        paginationContainer.innerHTML = ''
        container.appendChild(paginationButtonContainer)
    }

    this.update = (newPageNumber = currentPage) => {
        currentPage = newPageNumber
        pages = pageNumbers(totalPages, maxPagesVisible, currentPage)
        buttons.forEach((updateButton, btn) => updateButton(btn))
    }

    this.onChange = (handler) => {
        paginationButtonContainer.addEventListener('change', handler)
    }
    this.getTotalPages = () => {
        return pages
    }
}

const renderTextInfoRowOfPage = (rowPerPageValue, currentPage) => {
    return `Showing ${
        rowPerPageValue * currentPage - (rowPerPageValue - 1)
    } to ${
        rowPerPageValue * currentPage > datasetRefactor.length
            ? datasetRefactor.length
            : rowPerPageValue * currentPage
    } of ${datasetRefactor.length} entries`
}

const handleChangePaginationButton = (e, rowPerPageValue) => {
    currentPage = e.target.value
    inforShowItemOfPage.innerText = renderTextInfoRowOfPage(
        rowPerPageValue,
        currentPage
    )
    datasetFilterdByRowPerPageValue = datasetRefactor.slice(
        rowPerPageValue * currentPage - rowPerPageValue,
        rowPerPageValue * currentPage
    )
    console.log('run hehehe')
    renderRowTable(datasetFilterdByRowPerPageValue)
}

const handleSortRowTableByColumn = (columnName) => {
    const sortRowTable = (index) => {
        const asc = (b, i, { [i - 1]: a }) => !i || a <= b
        if (datasetFilterdByRowPerPageValue.every(asc)) {
            datasetFilterdByRowPerPageValue.sort((a, b) =>
                b[index].localeCompare(a[index])
            )
        } else {
            datasetFilterdByRowPerPageValue.sort((a, b) =>
                a[index].localeCompare(b[index])
            )
        }
    }

    switch (columnName) {
        case 'name': {
            sortRowTable(0)
            break
        }
        case 'position': {
            sortRowTable(1)
            break
        }
    }

    renderRowTable(datasetFilterdByRowPerPageValue)
}

window.addEventListener('DOMContentLoaded', () => {
    searchElement.addEventListener('input', (event) => {
        valueSearch = event.target.value
        const dataSearch = datasetFilterdByRowPerPageValue.filter((row) =>
            row.join('').toLowerCase().includes(valueSearch.toLowerCase())
        )
        renderRowTable(dataSearch)
    })

    selectRowPerPageElement.addEventListener('change', (event) => {
        rowPerPageValue = event.target.value
        datasetFilterdByRowPerPageValue = datasetRefactor.slice(
            0,
            parseInt(rowPerPageValue)
        )
        const paginationButtons = new PaginationButton(
            Math.ceil(datasetRefactor.length / rowPerPageValue),
            5
        )
        inforShowItemOfPage.innerText = renderTextInfoRowOfPage(
            rowPerPageValue,
            currentPage
        )

        paginationButtons.render()
        paginationButtons.onChange((event) => {
            handleChangePaginationButton(event, rowPerPageValue)
        })
        renderRowTable(datasetFilterdByRowPerPageValue)
    })

    paginationButtons = new PaginationButton(
        Math.ceil(datasetRefactor.length / 10),
        5
    )
    paginationButtons.onChange((event) => {
        handleChangePaginationButton(event, rowPerPageValue)
    })

    inforShowItemOfPage.innerText = renderTextInfoRowOfPage(
        rowPerPageValue,
        currentPage
    )
    paginationButtons.render()
    renderRowTable(datasetFilterdByRowPerPageValue)
})
