class Configuration {
    map = new Map();

    setValue(key, value) {
        this.map.set(key, value);
    }

    getValue(key) {
        return this.map.get(key);
    }
}

export let configuration = new Configuration();