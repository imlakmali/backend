
type linkedItem = {
    id: number;
    value: string;
    previous: number | null;
};

class LinkedList {
    private items: linkedItem[] = [];

    
    addRoot(value: string, id: number) {
        const rootItem: linkedItem = {
            id: id,
            value: value,
            previous: null
        };
        this.items.push(rootItem);
    }

    addElement(id: number, value: string, previous: number){
        const newItem : linkedItem = {
            id= id,
            value: value,
            previous: previous
            
        }
        this.items.push(newItem);
    }

}