import os
import re

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Replace @/lib/utils with ./lib/utils (most common)
        content = re.sub(r'@/lib/utils', r'./lib/utils', content)
        
        # Replace @/ with ./ (for other imports)
        content = re.sub(r'@/App', r'./App', content)
        content = re.sub(r'@/index\.css', r'./index.css', content)
        content = re.sub(r'@/index\.js', r'./index.js', content)
        
        # Handle any other @/ imports - they need to be relative to the file
        # For components/ui files, need to go up two levels
        dir_name = os.path.dirname(file_path)
        parts = dir_name.split(os.sep)
        
        # Calculate how many ../ we need
        levels_up = 0
        for part in reversed(parts):
            if part == 'src':
                break
            levels_up += 1
        
        prefix = '../' * levels_up if levels_up > 0 else './'
        
        # Replace remaining @/ with correct relative path
        def replace_match(match):
            path = match.group(1)
            return f'{prefix}{path}'
        
        content = re.sub(r'@/([^\s"\']+)', replace_match, content)
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed: {file_path}')
            return True
        return False
    except Exception as e:
        print(f'Error with {file_path}: {e}')
        return False

def main():
    src_dir = '/Users/atharv/Desktop/metas_new_1/frontend/src'
    count = 0
    
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                file_path = os.path.join(root, file)
                if fix_file(file_path):
                    count += 1
    
    print(f'\nTotal files fixed: {count}')

if __name__ == '__main__':
    main()
