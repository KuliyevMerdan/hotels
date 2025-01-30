// Большая буква первая
function capitalizeFirstLetter(str) {
    if (!str) return ''; 
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Возвращение с троеточием
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text; 

    const trimmedText = text.slice(0, maxLength); 
    const lastValidIndex = trimmedText.search(/[\s,.!?:;)](?=[^\s,.!?:;)])[^,.!?:;)]*$/); 

    if (lastValidIndex !== -1) {
        return trimmedText.slice(0, lastValidIndex) + "..."; 
    }

    return trimmedText + "...";
}

// Является ли подстрокой
function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}
