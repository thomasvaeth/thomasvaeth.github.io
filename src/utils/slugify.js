function slugify(string) {
  return string.replace(/[ ++]/g, '-').replace(/&/g, '').toLowerCase();
}

export default slugify;
