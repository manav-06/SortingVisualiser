async function insertionSort() {

    arr = document.querySelectorAll(".bar");

    arr[0].style.background = 'green';

    for (let i = 1; i < arr.length; i++) {

        let j = i - 1;
        let key = arr[i].style.height;
        // color
        arr[i].style.background = 'blue';

        await wait(delay);

        while (j >= 0 && (parseInt(arr[j].style.height) > parseInt(key))) {

            arr[j].style.background = 'blue';
            arr[j + 1].style.height = arr[j].style.height;
            j--;

            await wait(delay);
        }
        for (let k = i; k >= 0; k--) {
            arr[k].style.background = 'green';
        }

        arr[j + 1].style.height = key;
    }
}

const insertionSortbtn = document.querySelector(".insertionSort");

insertionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


