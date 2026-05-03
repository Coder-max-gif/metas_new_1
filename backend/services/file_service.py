import os
from pathlib import Path

class FileService:
    def __init__(self):
        self.download_path = Path(os.getenv("DOWNLOAD_FILES_PATH", "./downloads"))
        self.download_path.mkdir(exist_ok=True)
        
        self.indicator_path = self.download_path / "indicator"
        self.algorithm_path = self.download_path / "algorithm"
        
        self.indicator_path.mkdir(exist_ok=True)
        self.algorithm_path.mkdir(exist_ok=True)
        
        self._create_dummy_files()
    
    def _create_dummy_files(self):
        indicator_file = self.indicator_path / "MT5_Premium_Indicator.ex5"
        algorithm_file = self.algorithm_path / "MT5_Premium_Algorithm.ex5"
        
        if not indicator_file.exists():
            indicator_file.write_text("METAS MT5 Premium Indicator - Demo File")
        
        if not algorithm_file.exists():
            algorithm_file.write_text("METAS MT5 Premium Algorithm - Demo File")
    
    def get_indicator_file(self):
        return self.indicator_path / "MT5_Premium_Indicator.ex5"
    
    def get_algorithm_file(self):
        return self.algorithm_path / "MT5_Premium_Algorithm.ex5"